import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { MenuItemDetailService } from '../services/menu-item-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {

  menuitems: MenuItem[];

  constructor(
    private menuItemDetailService: MenuItemDetailService
  ) { }

  ngOnInit() {
    this.menuitems = this.menuItemDetailService.getMenuItems();
  }
}
