import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";

export const AppTheme: CustomThemeConfig = {
  name: "app-theme",
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base": `system-ui`,
    "--theme-font-family-heading": `system-ui`,
    "--theme-font-color-base": "0 0 0",
    "--theme-font-color-dark": "255 255 255",
    "--theme-rounded-base": "9999px",
    "--theme-rounded-container": "8px",
    "--theme-border-base": "1px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "255 255 255",
    "--on-secondary": "255 255 255",
    "--on-tertiary": "255 255 255",
    "--on-success": "255 255 255",
    "--on-warning": "0 0 0",
    "--on-error": "0 0 0",
    "--on-surface": "var(--color-tertiary-300)",
    // =~= Theme Colors  =~=
    // primary | #90092a
    "--color-primary-50": "238 218 223", // #eedadf
    "--color-primary-100": "233 206 212", // #e9ced4
    "--color-primary-200": "227 194 202", // #e3c2ca
    "--color-primary-300": "211 157 170", // #d39daa
    "--color-primary-400": "177 83 106", // #b1536a
    "--color-primary-500": "144 9 42", // #90092a
    "--color-primary-600": "130 8 38", // #820826
    "--color-primary-700": "108 7 32", // #6c0720
    "--color-primary-800": "86 5 25", // #560519
    "--color-primary-900": "71 4 21", // #470415
    // secondary | #cdb991
    "--color-secondary-50": "248 245 239", // #f8f5ef
    "--color-secondary-100": "245 241 233", // #f5f1e9
    "--color-secondary-200": "243 238 228", // #f3eee4
    "--color-secondary-300": "235 227 211", // #ebe3d3
    "--color-secondary-400": "220 206 178", // #dcceb2
    "--color-secondary-500": "205 185 145", // #cdb991
    "--color-secondary-600": "185 167 131", // #b9a783
    "--color-secondary-700": "154 139 109", // #9a8b6d
    "--color-secondary-800": "123 111 87", // #7b6f57
    "--color-secondary-900": "100 91 71", // #645b47
    // tertiary | #8e394e
    "--color-tertiary-50": "238 225 228", // #eee1e4
    "--color-tertiary-100": "232 215 220", // #e8d7dc
    "--color-tertiary-200": "227 206 211", // #e3ced3
    "--color-tertiary-300": "210 176 184", // #d2b0b8
    "--color-tertiary-400": "176 116 131", // #b07483
    "--color-tertiary-500": "142 57 78", // #8e394e
    "--color-tertiary-600": "128 51 70", // #803346
    "--color-tertiary-700": "107 43 59", // #6b2b3b
    "--color-tertiary-800": "85 34 47", // #55222f
    "--color-tertiary-900": "70 28 38", // #461c26
    // success | #666666
    "--color-success-50": "232 232 232", // #e8e8e8
    "--color-success-100": "224 224 224", // #e0e0e0
    "--color-success-200": "217 217 217", // #d9d9d9
    "--color-success-300": "194 194 194", // #c2c2c2
    "--color-success-400": "148 148 148", // #949494
    "--color-success-500": "102 102 102", // #666666
    "--color-success-600": "92 92 92", // #5c5c5c
    "--color-success-700": "77 77 77", // #4d4d4d
    "--color-success-800": "61 61 61", // #3d3d3d
    "--color-success-900": "50 50 50", // #323232
    // warning | #f96743
    "--color-warning-50": "254 232 227", // #fee8e3
    "--color-warning-100": "254 225 217", // #fee1d9
    "--color-warning-200": "254 217 208", // #fed9d0
    "--color-warning-300": "253 194 180", // #fdc2b4
    "--color-warning-400": "251 149 123", // #fb957b
    "--color-warning-500": "249 103 67", // #f96743
    "--color-warning-600": "224 93 60", // #e05d3c
    "--color-warning-700": "187 77 50", // #bb4d32
    "--color-warning-800": "149 62 40", // #953e28
    "--color-warning-900": "122 50 33", // #7a3221
    // error | #f96743
    "--color-error-50": "254 232 227", // #fee8e3
    "--color-error-100": "254 225 217", // #fee1d9
    "--color-error-200": "254 217 208", // #fed9d0
    "--color-error-300": "253 194 180", // #fdc2b4
    "--color-error-400": "251 149 123", // #fb957b
    "--color-error-500": "249 103 67", // #f96743
    "--color-error-600": "224 93 60", // #e05d3c
    "--color-error-700": "187 77 50", // #bb4d32
    "--color-error-800": "149 62 40", // #953e28
    "--color-error-900": "122 50 33", // #7a3221
    // surface | #444444
    "--color-surface-50": "227 227 227", // #e3e3e3
    "--color-surface-100": "218 218 218", // #dadada
    "--color-surface-200": "208 208 208", // #d0d0d0
    "--color-surface-300": "180 180 180", // #b4b4b4
    "--color-surface-400": "124 124 124", // #7c7c7c
    "--color-surface-500": "68 68 68", // #444444
    "--color-surface-600": "61 61 61", // #3d3d3d
    "--color-surface-700": "51 51 51", // #333333
    "--color-surface-800": "41 41 41", // #292929
    "--color-surface-900": "33 33 33", // #212121
  },
};
