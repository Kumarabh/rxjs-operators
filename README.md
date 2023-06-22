# rxjs-operators


this.service.getData().pipe(
      map((posts: any) => posts.map(({id, title}: any) => ({id, title}))),
      map((posts: any) => posts.filter((post: any) => post.id < 10)),
    )
    .subscribe((data: any) => {
      console.log(data)
    })
