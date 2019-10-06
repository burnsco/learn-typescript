class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep beep!');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log(`vroom vroom`);
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}
