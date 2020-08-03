class Github {
  constructor() {
    this.client_id = 'ca224f2be28ab10673b9'
    this.client_secret = 'c8fb99150335e688dac85aff335694b83d16c625'
    this.repos_count = 5  
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const profile = await profileResponse.json()

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const repos = await repoResponse.json()


    return {
      profile,
      repos
    }
  }
}