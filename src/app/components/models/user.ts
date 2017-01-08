export class User {
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get role(): number {
    return this._role;
  }

  set role(value: number) {
    this._role = value;
  }
  private _name: string = null;
  private _role: number = null;

  constructor() {}
}
