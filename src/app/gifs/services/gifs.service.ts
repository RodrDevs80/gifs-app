import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';


const loadFromLocalStorage = () => {
    const gifsFromLocalStorage = localStorage.getItem('historyGifs') ?? '{}';
    const gifs = JSON.parse(gifsFromLocalStorage);
    return gifs;
}

//Record<string,Gif[]>


@Injectable({ providedIn: 'root' })
export class GifsService {

    private readonly http = inject(HttpClient);

    trendingGifs = signal<Gif[]>([]);
    trendingGifsLoading = signal(true);

    searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
    searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

    constructor() {
        this.loadTrendingGifs();
    }

    //guardar en el localstorage con un efecto cada vez searchHistory cambie 
    saveGifsToLocalStore = effect(() => {
        const historyString = JSON.stringify(this.searchHistory())
        localStorage.setItem('historyGifs', historyString);

    })

    loadTrendingGifs() {
        this.http.get<GiphyResponse>(`${environment.giphyUrlBase}/gifs/trending`, {
            params: {
                api_key: environment.giphyApiKey,
                limit: 20
            }
        }).subscribe((resp) => {
            //console.log({ resp });
            const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
            this.trendingGifs.set(gifs);
            this.trendingGifsLoading.set(false);
            //console.log({ gifs });
        })


    }

    // https://api.giphy.com/v1/gifs/search?api_key=&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips
    searchGifs(query: string) {
        return this.http.get<GiphyResponse>(`${environment.giphyUrlBase}/gifs/search`, {
            params: {
                api_key: environment.giphyApiKey,
                q: query,
                limit: 20
            }
        }).pipe(
            map(resp => GifMapper.mapGiphyItemsToGifArray(resp.data)),

            //historial
            tap(items => {
                this.searchHistory.update(preState => ({
                    ...preState,
                    [query.toLocaleLowerCase().trim()]: items,
                }))
            }),

        );

        // .subscribe((resp) => {
        //     const searchGifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        //     console.log({ searchGifs })
        // })
    }

    getHistoryGifs(query: string): Gif[] {
        return this.searchHistory()[query] ?? []
    }

}