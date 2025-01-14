import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { render } from '../src/public_api';

@Component({
  selector: 'fixture',
  template: ``,
})
class FixtureComponent {}

test('should navigate correctly', async () => {
  const { navigate } = await render(FixtureComponent, {
    routes: [{ path: 'details', component: FixtureComponent }],
  });

  const router = TestBed.inject(Router);
  const navSpy = jest.spyOn(router, 'navigate');

  navigate('details');

  expect(navSpy).toBeCalledWith(['details']);
});

test('should pass queryParams if provided', async () => {
  const { navigate } = await render(FixtureComponent, {
    routes: [{ path: 'details', component: FixtureComponent }],
  });

  const router = TestBed.inject(Router);
  const navSpy = jest.spyOn(router, 'navigate');

  navigate('details?sortBy=name&sortOrder=asc');

  expect(navSpy).toBeCalledWith(['details'], {
    queryParams: {
      sortBy: 'name',
      sortOrder: 'asc',
    },
  });
});
