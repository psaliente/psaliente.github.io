import { test, expect } from '@playwright/test';
import { SECTIONS } from '../src/constants';
import { useMyInfoService } from '../src/services';

test.beforeEach(async ({ page }) => {
  await page.goto('https://psaliente.github.io');
});

test('has site Title', async ({ page }) => {
  await expect(page).toHaveTitle('Peter John Saliente');
});

test.describe('Header Section', () => {
  const { getMyInfo } = useMyInfoService();

  test('has header title', async ({ page }) => {
    await expect(page.getByText(getMyInfo().Name, { exact: true })).toBeVisible();
  });

  test('has header description', async ({ page }) => {
    await expect(page.getByText(getMyInfo().Description)).toBeVisible();
  });
});

test.describe('Projects Section', () => {
  test('has section title "Projects"', async ({ page }) => {
    const { TITLE, SUBTITLE } = SECTIONS.PROJECTS;

    await expect(page.getByText(`${TITLE}${SUBTITLE}`, { exact: true })).toBeVisible();
  });
  //todo: add per project testing
});

test.describe('Languages Section', () => {
  test('has section title "Languages"', async ({ page }) => {
    const { TITLE, SUBTITLE } = SECTIONS.PROGLANGS;

    await expect(page.getByText(`${TITLE}${SUBTITLE}`, { exact: true })).toBeVisible();
  });
  //todo: add per item testing
});

test.describe('Libraries and Frameworks Section', () => {
  test('has section title "Libraries and Frameworks"', async ({ page }) => {
    const { TITLE, SUBTITLE } = SECTIONS.PROGLIBS;

    await expect(page.getByText(`${TITLE}${SUBTITLE}`, { exact: true })).toBeVisible();
  });
  //todo: add per item testing
});

test.describe('Tools and Platforms Section', () => {
  test('has section title "Tools and Platforms"', async ({ page }) => {
    const { TITLE, SUBTITLE } = SECTIONS.PROGTOOLS;

    await expect(page.getByText(`${TITLE}${SUBTITLE}`, { exact: true })).toBeVisible();
  });
  //todo: add per item testing
});

test.describe('Footer Section', () => {
  test('has footer visible', async ({ page }) => {
    await expect(page.getByText('Peter John C. Saliente - 2021', { exact: true })).toBeVisible();
  });
  //todo: add link testing
});
