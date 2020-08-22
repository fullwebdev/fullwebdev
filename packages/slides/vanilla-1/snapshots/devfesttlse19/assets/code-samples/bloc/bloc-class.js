class SearchBloc {
    constructor(repository) {
        this.repository = repository;
        this.query = '';
        this.results = [];
    }
    get preamble() {
        return this.query == null || this.query.length == 0
            ? ''
            : `Results for ${this.query}`;
    }
    async executeSearch(query) {
        this.query = query;
        const results = await this.repository.search(query);
        this.results = results;
    }
}
