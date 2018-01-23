import {Component, OnInit} from '@angular/core';
import {Heroe, HeroesService} from '../../../services/heroes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

    heroes: Heroe[] = [];
    termino:string;

    constructor(private activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService,
                private router:Router) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.heroes = this._heroesService.buscarHeroe(params['termino']);
            this.termino = params['termino'];
        })

    }

    verHeroe(idx: number) {
        this.router.navigate( ['/heroe', idx] );
    }

}
