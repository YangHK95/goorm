class Github {
    constructor() {
        this.client_id = '2e35f407181858da07f0';
        this.client_secret = '5a67cb9d31f031738b689eefc39541089c6a60e4';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse =
            await fetch(
                `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
            );

        const repoResponse =
            await fetch(
                `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
            );

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}