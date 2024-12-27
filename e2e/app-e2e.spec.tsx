import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://psaliente.github.io');
})

test('has site Title', async ({page}) => {
    await expect(page).toHaveTitle('Peter John Saliente');
})

test.describe('Header Section', () => {
    test('has header title', async ({page}) => {
        await expect(page.getByText('Peter John C. Saliente', {exact: true})).toBeVisible();
    });

    test ('has header description', async ({page}) => {
        await expect(page.getByText(/hello*/i)).toBeVisible();
    });
})

test.describe('Projects Section', () => {
    test('has section title "Projects"', async ({page}) => {
        await expect(page.getByText('Projects', {exact: true})).toBeVisible();
    });
    //todo: add per project testing
});

test.describe('Languages Section', () => {
    test('has section title "Languages"', async ({page}) => {
        await expect(page.getByText('Languages', {exact: true})).toBeVisible();
    });
    //todo: add per item testing
});

test.describe('Libraries and Frameworks Section', () => {
    test('has section title "Libraries and Frameworks"', async ({page}) => {
        await expect(page.getByText('Libraries and Frameworks', {exact: true})).toBeVisible();
    });
    //todo: add per item testing
});

test.describe('Tools and Platforms Section', () => {
    test('has section title "Tools and Platforms"', async ({page}) => {
        await expect(page.getByText('Tools and Platforms', {exact: true})).toBeVisible();
    });
    //todo: add per item testing
});

test.describe('Footer Section', () => {
    test('has footer visible', async ({page}) => {
        await expect(page.getByText('Peter John C. Saliente - 2021', {exact: true})).toBeVisible();
    });
    //todo: add link testing
});