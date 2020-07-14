import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage";
import CardPage from "@/views/CardPage";
import TransactionPage from "@/views/TransactionPage";
import FundingPage from "@/views/FundingPage";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage
    },
    {
      path: "/card/:card_token",
      name: "Card",
      component: CardPage
    },
    {
      path: "/transaction/:transaction_token",
      name: "Transaction",
      component: TransactionPage
    },
    {
      path: "/funding*",
      name: "Funding",
      component: FundingPage
    }
  ]
});
