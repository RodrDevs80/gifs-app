import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { GifsService } from '../../services/gifs.service';

interface MenuOption {
  label: string,
  subLabel: string,
  router: string,
  icon: string
}

@Component({
  selector: 'app-gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifs-side-menu-options.html',

})
export class GifsSideMenuOptions {
  gifService = inject(GifsService);

  menuOption: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs Populares',
      router: '/dashboard/trending'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      subLabel: 'Buscar Gifs',
      router: '/dashboard/search'
    }
  ];

}
