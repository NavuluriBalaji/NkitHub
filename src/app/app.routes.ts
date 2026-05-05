import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage),
    data: { title: 'NKit - Build Production AI Agents with Confidence' }
  },
  {
    path: 'features',
    loadComponent: () => import('./pages/features/features.page').then(m => m.FeaturesPage),
    data: { title: 'Features - NKit' }
  },
  {
    path: 'examples',
    loadComponent: () => import('./pages/examples/examples.page').then(m => m.ExamplesPage),
    data: { title: 'Examples - NKit' }
  },
  {
    path: 'docs',
    loadComponent: () => import('./pages/docs/docs.page').then(m => m.DocsPage),
    data: { title: 'Getting Started - NKit' }
  },
  {
    path: 'community',
    loadComponent: () => import('./pages/community/community.page').then(m => m.CommunityPage),
    data: { title: 'Community - NKit' }
  },
  {
    path: 'get-started',
    loadComponent: () => import('./pages/docs/docs.page').then(m => m.DocsPage),
    data: { title: 'Get Started - NKit' }
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing.page').then(m => m.PricingPage),
    data: { title: 'Pricing - NKit' }
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.page').then(m => m.BlogPage),
    data: { title: 'Blog - NKit' }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
