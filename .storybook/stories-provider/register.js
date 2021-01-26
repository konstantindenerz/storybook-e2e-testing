import {addons} from "@storybook/addons";

addons.register('stories-provider', api => {
  const channel = api.getChannel();
  channel.on('setStories', ({stories}) => {
    window.stories = Object.keys(stories);
    console.log('s', stories);
    if (window.parent) {
      window.parent.stories = Object.keys(stories);
    }
  })
})
