export class Config {
  readonly stage: string;
  readonly stacBrowserDistPath: string;

  constructor() {
    if (!process.env.STAGE) throw Error("Must provide STAGE");
    this.stage = process.env.STAGE;
    if (!process.env.STAC_BROWSER_DIST_PATH) throw Error("Must provide STAC_BROWSER_DIST_PATH");
    this.stacBrowserDistPath = process.env.STAC_BROWSER_DIST_PATH!;
  }

  /**
   * Helper to generate id of stack
   * @param serviceId Identifier of service
   * @returns Full id of stack
   */
  buildStackName = (): string =>
    `ghgc-stac-browser-${this.stage}`;
}
