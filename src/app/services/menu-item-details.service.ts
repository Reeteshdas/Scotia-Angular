import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { MENU_ITEM_LIST } from '../models/menu-item-list.model';

@Injectable({
  providedIn: 'root'
})
export class MenuItemDetailService {
  constructor() { }
   getMenuItems(): MenuItem[] {
       return MENU_ITEM_LIST ;
    }
}
