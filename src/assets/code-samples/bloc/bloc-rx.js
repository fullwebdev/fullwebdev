class SearchBloc {
    constructor(repository) {
        this.repository = repository;
        this._query$ = new BehaviorSubject('');
        this._results$ = this._query$.pipe(
            switchMap((query) => observableFrom(this.repository.search(query)))
        );
        this._preamble$ = this.results$.pipe(
            withLatestFrom(this._query$, (_, q) =>
                q ? `Results for ${q}` : ''
            )
        );
    }
    get results$() {
        return this._results$;
    }
    get preamble$() {
        return this._preamble$;
    }
    get query() {
        return this._query$;
    }
    dispose() {
        this._query$.complete();
    }
}
