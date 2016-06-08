import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
import Ember from "ember";

moduleForComponent("transaction-list-header", "Integration | Component | transaction list header", {
    integration: true,
});

test("it renders", function (assert) {
    const users = [
        { name: "Bob" },
        { name: "Yuri" },
    ];
    const event = {
        name: "Test event",
        currency: {
            code: "USD",
        },
    };
    const transactions = [
        Ember.Object.create({
            payer: users[0], event, name: "Transaction 1", amount: "200", participants: users,
        }),
        Ember.Object.create({
            payer: users[1], event, name: "Transaction 2", amount: "300", participants: users,
        }),
    ];

    this.set("transactions", transactions);
    this.set("currentUser", users[0]);

    this.render(hbs`{{transaction-list-header transactions=transactions currentUser=currentUser}}`);

    assert.equal(this.$().text().trim(), "You've paid 200 USD of Total 500 USD");
});