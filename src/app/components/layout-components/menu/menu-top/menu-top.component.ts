import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as _ from 'lodash';
import { select, Store } from '@ngrx/store';
import { MenuService } from 'src/app/services/menu.service';
import * as SettingsActions from 'src/app/store/actions/setting.action';
// import { GetSettingAction } from 'src/app/store/actions/settings.actions';
import { selectSetting } from 'src/app/store/selectors/setting.selectors';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'hlc-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss'],
})
export class MenuTopComponent implements OnInit {
  @Input() isMenuCollapsed: boolean = false;
  isLightTheme: boolean;
  isSettingsOpen: boolean;
  menuData: any[];
  menuDataActivated: any[];

  constructor(
    private menuService: MenuService,
    private _store: Store<IAppState>,
    private router: Router,
  ) {
    this._store.pipe(select(selectSetting)).subscribe(state => {
      this.isLightTheme = state.isLightTheme;
      this.isSettingsOpen = state.isSettingsOpen;
    });
  }

  ngOnInit() {
    this.menuService.getTopMenuData().subscribe(menuData => (this.menuData = menuData));
    this._store.dispatch(new SettingsActions.GetSettingAction());

    this.activateMenu(this.router.url)
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        this.activateMenu(event.url ? event.url : null)
      })
  }

  activateMenu(url: any, menuData = this.menuData) {
    menuData = JSON.parse(JSON.stringify(menuData))
    const pathWithSelection = this.getPath({ url: url }, menuData, (entry: any) => entry, 'url')
    if (pathWithSelection) {
      pathWithSelection.pop().selected = true
      _.each(pathWithSelection, (parent: any) => (parent.open = true))
    }
    this.menuDataActivated = menuData.slice()
  }

  getPath(
    element: any,
    source: any,
    property: any,
    keyProperty = 'key',
    childrenProperty = 'children',
    path = [],
  ) {
    let found = false
    const getElementChildren = (value: any) => _.get(value, childrenProperty)
    const getElementKey = (value: any) => _.get(value, keyProperty)
    const key = getElementKey(element)
    return (
      _.some(source, (e: any) => {
        if (getElementKey(e) === key) {
          path.push(e)
          return true
        } else {
          return (found = this.getPath(
            element,
            getElementChildren(e),
            property,
            keyProperty,
            childrenProperty,
            path.concat(e),
          ))
        }
      }) &&
      (found || _.map(path, property))
    )
  }

  toggleSettings() {
    this._store.dispatch(
      new SettingsActions.SetSettingAction({
        isSettingsOpen: !this.isSettingsOpen,
      }),
    )
  }
}
