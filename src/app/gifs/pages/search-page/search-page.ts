import { Component, inject, signal } from '@angular/core';
import { GifsList } from "../../components/gifs-list/gifs-list";
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface'

@Component({
  selector: 'app-search-page',
  imports: [GifsList],
  templateUrl: './search-page.html',

})
export default class SearchPage {
  gitService = inject(GifsService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gitService.searchGifs(query).subscribe((resp) => {
      //console.log(resp);
      this.gifs.set(resp);
    })

  }
}
