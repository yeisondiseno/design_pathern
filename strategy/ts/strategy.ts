interface Strategy {
  login(user: string, password: string): boolean;
}

class LoginContext {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(newStrategy: Strategy) {
    this.strategy = newStrategy;
  }

  login(user: string, password: string): boolean {
    return this.strategy.login(user, password);
  }
}

class LoginDBStrategy implements Strategy {
  login(user: string, password: string) {
    console.log("Nos dirigimos a la base de datos");
    return user === "admin" && password === "entra";
  }
}

class LoginServiceStrategy implements Strategy {
  login(user: string, password: string) {
    console.log("Nos dirigimos a un servicio de Auth");
    return user === "admin" && password === "entra";
  }
}

const auth = new LoginContext(new LoginDBStrategy());
auth.login("admin", "entra");

auth.setStrategy(new LoginServiceStrategy());
auth.login("admin", "entra");
