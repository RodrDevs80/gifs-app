import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifsService } from '../../services/gifs.service';
import { GifsList } from "../../components/gifs-list/gifs-list";

@Component({
    selector: 'app-history-page',
    templateUrl: 'history-page.html',
    imports: [GifsList]
})

export default class NameComponent {
    gitService = inject(GifsService);

    query = toSignal(
        inject(ActivatedRoute).params.pipe(
            map(p => p['query'])
        )
    )

    gifsByKeys = computed(() => {
        return this.gitService.getHistoryGifs(this.query())
    })
}