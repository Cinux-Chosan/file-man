import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { map, toArray } from 'rxjs/operators';
import { createReaddirObserver, mapEntryInfo } from './utils';

const rootDir = process.cwd();
const resolvePath = (path: string, base = rootDir) => join(base, path);

@Injectable()
export class FilemanService {
  async readDir(dir: string) {
    dir = resolvePath(dir);

    const ob = createReaddirObserver(dir);

    return ob.pipe(map(mapEntryInfo), toArray());
  }
}
