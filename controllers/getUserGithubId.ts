import { Status } from 'https://deno.land/x/oak/mod.ts';

export async function getUserGithubId(context: any) {
    const body = await context.request.body();
    const username = await context.request.headers.get('username');

    const result = await fetch(`https://api.github.com/users/${username}`)
    const data = await result.json();
    if (data.message == "Not Found") {
        context.response.status = Status.NotFound;
        context.response.body = ({"Error": "The user Not Found !"});
        return
    }
    else {
        context.response.status = Status.OK;
        context.response.body = data;
        return
    }

    console.log(username)
}
