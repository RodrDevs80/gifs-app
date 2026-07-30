import { Component, input } from '@angular/core';


@Component({
  selector: 'app-gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.html',

})
export class GifsListItem {
  imagenUrl = input.required<string>();
}
