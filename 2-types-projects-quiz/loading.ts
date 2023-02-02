{
 /**
  * Print Loading State
  */
 type LoadingState = {
  state: "loading";
 };

 type SuccessState = {
  state: "success";
  response: {
   body: string;
  };
 };

 type FailState = {
  state: "fail";
  reason: string;
 };

 type ResourceLoadState = LoadingState | SuccessState | FailState;

 function printLoginStatee(state: ResourceLoadState) {
  if (state.state === "loading") {
   console.log(`👀 ${state.state}...`);
  } else if (state.state === "success") {
   console.log(`😃 ${state.response.body}`);
  } else {
   console.log(`😱 ${state.reason}`);
  }
 }

 printLoginStatee({ state: "loading" }); // 👀 loading...
 printLoginStatee({ state: "success", response: { body: "loaded" } }); // 😃 loaded
 printLoginStatee({ state: "fail", reason: "no network" }); // 😱 no network
}
