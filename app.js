'use strict';

const Homey = require('homey');

class MyApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('MyApp has been initialized');

    //Create an image Image
    const justAnImage = await this.homey.images.createImage();
    justAnImage.setUrl('https://cdn-dbddp.nitrocdn.com/BUbhSnkwlnPbJoYEuDczHOYgMTSVhafb/assets/images/optimized/rev-76dc96e/wp-content/uploads/2019/11/Blog-Multisource-SDK-SAP-BusinessObjects-Design-Studio-main-2-300x150.png');
    justAnImage.update()

    //Create a token
    const justAnImageToken = await this.homey.flow.createToken("CleanLog", {
      type: "image",
      title: "Just an image",
    });
    await justAnImageToken.setValue(justAnImage);

    //Register triggercard
    const triggerCard = this.homey.flow.getTriggerCard("imageToken")

    // Triger the card
    triggerCard.trigger({ image: justAnImage });
  }

}

module.exports = MyApp;
