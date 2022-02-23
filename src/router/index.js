import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/hero/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      layout: "public",
    },
  },

  {
    path: "/login",
    name: "Login",

    component: () => import("../../src/components/SignIn.vue"),
    meta: {
      layout: "public",
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",

    component: () => import("../views/dashboard/Dashboard.vue"),
    meta: {
      pageTitle: "Dashboard",
      breadcrumb: [
        {
          text: "dashboard",
          active: true,
        },
      ],
      authRequired: true,
    },
    children: [],
  },
  {
    path: "",
    name: "Membership",

    component: () => import("../components/membership/index.vue"),
    meta: {
      pageTitle: "Membership",
      breadcrumb: [
        {
          text: "membership",
          active: true,
        },
      ],
      authRequired: false,
    },
    children: [
      {
        path: "/membership",
        name: "Membership",

        component: () => import("../components/membership/Membership.vue"),
        meta: {
          pageTitle: "Membership",
          breadcrumb: [
            {
              text: "membership",
              active: true,
            },
          ],
          authRequired: false,
        },
      },
      {
        path: "/membership/new-member",
        name: "Membership",

        component: () => import("../components/membership/NewMember.vue"),
        meta: {
          pageTitle: "create new member",
          breadcrumb: [
            {
              text: "membership",
              active: true,
            },
          ],
          authRequired: false,
        },
      },
    ],
  },
  {
    path: "",
    name: "Contributions",

    component: () => import("../components/contribution/index.vue"),
    meta: {
      pageTitle: "",
      breadcrumb: [
        {
          text: "contributions",
          active: true,
        },
      ],
      authRequired: false,
    },
    children: [
      {
        path: "/contributions",
        name: "Contribution table",

        component: () => import("../components/contribution/ContTable.vue"),
        meta: {
          pageTitle: "",
          breadcrumb: [
            {
              text: "all contributions",
              active: true,
            },
          ],
          authRequired: false,
        },
      },
      {
        path: "/contributions/:id",
        name: "ContDetails",

        component: () => import("../components/contribution/ContDetails.vue"),
        meta: {
          pageTitle: "",
          breadcrumb: [
            {
              text: "contributionDetails",
              active: true,
            },
          ],
          authRequired: false,
        },
      },
      {
        path: "/deposit",
        name: "Deposit",

        component: () => import("../components/contribution/MakeDeposit.vue"),
        meta: {
          pageTitle: "",
          breadcrumb: [
            {
              text: "deposit",
              active: true,
            },
          ],
          authRequired: false,
        },
      },
      {
        path: "/redrawal",
        name: "Redrawal",

        component: () => import("../components/contribution/MakeRedrawal.vue"),
        meta: {
          pageTitle: "",
          breadcrumb: [
            {
              text: "redrawal",
              active: true,
            },
          ],
          authRequired: false,
        },
      },
      {
        path: "/statement",
        name: "Statement",

        component: () => import("../components/contribution/Statement.vue"),
        meta: {
          pageTitle: "",
          breadcrumb: [
            {
              text: "statement",
              active: true,
            },
          ],
          authRequired: false,
        },
      },
    ],
  },

  {
    path: "",
    name: "Loans",

    component: () => import("../components/loan/index.vue"),
    meta: {
      pageTitle: "Loans",
      breadcrumb: [
        {
          text: "loans",
          active: true,
        },
      ],
      authRequired: true,
    },
    children: [
      {
        path: "/loans",
        name: "Loan table",

        component: () => import("../components/loan/LoanTable"),
        meta: {
          pageTitle: "All loans",
          breadcrumb: [
            {
              text: "all loans",
              active: true,
            },
          ],
          authRequired: true,
        },
      },
      {
        path: "/loans/new-loan",
        name: "Loan form",

        component: () => import("../components/loan/LoanForm"),
        meta: {
          pageTitle: "Loan form",
          breadcrumb: [
            {
              text: "loan form",
              active: true,
            },
          ],
          authRequired: true,
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
