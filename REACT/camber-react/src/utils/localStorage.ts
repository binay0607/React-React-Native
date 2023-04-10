export class LocalStorage {
  static get<R>(key: string) {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value) as R;
    }
    return null;
  }
  static remove(key: string) {
    localStorage.removeItem(key);
  }
  static set<T>(key: string, value: T) {
    if (value === undefined || value === null) {
      return LocalStorage.remove(key);
    }
    localStorage.setItem(key, JSON.stringify(value));
  }
  static update<T>(key: string, value: T) {
    if (value === undefined || value === null) {
      return;
    }
    let data = LocalStorage.get<T>(key);
    if (
      data === null ||
      (typeof data !== "object" && typeof value !== "object")
    ) {
      LocalStorage.set(key, value);
    } else {
      data = { ...data, ...value };
    }
  }
}
