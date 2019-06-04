export class Cell<T> {
  member: T;

  constructor(member?: T) {
    this.member = member;
  }

  setMember(newMember: T) {
    this.member = newMember;
  }

  getMember() { return this.member; }

}
