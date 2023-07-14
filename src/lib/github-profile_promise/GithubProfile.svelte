<script lang="ts">
  import { onMount } from "svelte";

  export let section: { id: string; title: string };

  interface GithubUser {
    avatarUrl: string;
    username: string;
    name: string;
    bio: string;
    followersCount: number;
    followingCount: number;
    location: string;
  }

  function mapJsonToGithubUser(json: any): GithubUser {
    return {
      avatarUrl: json["avatar_url"],
      username: json["login"],
      name: json["name"],
      bio: json["bio"],
      followersCount: json["followers"],
      followingCount: json["following"],
      location: json["location"],
    };
  }

  const request = async () => {
    try {
      const result = await fetch("https://api.github.com/users/ikhsan3adi")
        .then(async (response) => {
          return mapJsonToGithubUser(await response.json());
        })
        .catch((error) => {
          throw error;
        });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };

  let promise = new Promise<GithubUser>(() => {});

  onMount(() =>
    setTimeout(() => {
      promise = request();
    }, 2000)
  );
</script>

<section class="dark:text-white">
  <h1 class="text-center" id={section.id}>{section.title}</h1>
  <div class="card sm:mx-12 md:mx-36 xl:mx-48">
    <div class="lg:flex lg:justify-center lg:align-middle">
      {#await promise}
        <div
          class="rounded-full w-60 aspect-square max-lg:mx-auto sm:w-72 lg:w-80 m-4 bg-slate-500 animate-pulse flex justify-center"
        >
          <h2 class="text-center my-auto">Loading...</h2>
        </div>
      {:then data}
        <div
          class="rounded-full w-60 aspect-square max-lg:mx-auto sm:w-72 lg:w-80 bg-cover m-4"
          style="background-image: url({data.avatarUrl});"
        />
      {:catch _}
        <div
          class="rounded-full w-60 aspect-square max-lg:mx-auto sm:w-72 lg:w-80 bg-cover m-4 flex justify-center bg-red-400"
        >
          <h2 class="text-center my-auto">Error!</h2>
        </div>
      {/await}

      <div class="mx-auto pb-4 pt-4 lg:pt-6 xl:pt-8 lg:ml-8">
        <div class="max-lg:text-center">
          {#await promise}
            <h2 class="lg:text-3xl lg:mb-2">Loading...</h2>
          {:then data}
            <h2 class="lg:text-3xl lg:mb-2">{data.name}</h2>
            <h4 class="mb-2">@{data.username}</h4>
            <p>{data.bio}</p>
          {:catch error}
            <h2 class="lg:text-3xl lg:mb-2">Error occurred!</h2>
            <h4 class="mb-2">Message:</h4>
            <p>{error.message}</p>
          {/await}

          {#await promise}
            <div />
          {:then data}
            <div class="flex justify-center lg:justify-start gap-2 my-4">
              <div>
                <span class="font-semibold">{data.followersCount}</span> followers
              </div>
              <div>
                <span class="font-semibold">{data.followingCount}</span> following
              </div>
            </div>
            <div class="flex justify-center lg:justify-start">
              <span>{data.location}</span>
            </div>
          {/await}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
</style>
