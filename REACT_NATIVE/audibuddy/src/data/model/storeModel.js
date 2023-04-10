class Store {
  constructor(name, location, address, type, date, isPending, id) {
    this.name = name;
    this.lat = location.lat;
    this.lon = location.lon;
    this.address = address;
    this.type = type;
    this.date = date;
    this.isPending = isPending;
    this.id = id;
  }
}
export default Store;
