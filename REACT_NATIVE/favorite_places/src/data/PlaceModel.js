class place {
  constructor(title, imgUri, location) {
    (this.title = title),
      (this.imgUri = imgUri),
      (this.location = location),
      (this.id = new Date() + Math.random());
  }
}

export default place;
