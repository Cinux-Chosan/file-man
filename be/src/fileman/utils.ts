import readdirp from 'readdirp';
import { Observable } from 'rxjs';

export function createReaddirObserver(dir: string) {
  return new Observable(ob => {
    const rs = readdirp(dir, {
      alwaysStat: true,
      depth: 0,
      type: 'files_directories',
    });
    rs.on('data', data => ob.next(data));
    rs.on('error', error => ob.error(error));
    rs.on('end', () => ob.complete());
  });
}

export function mapEntryInfo(entry: readdirp.EntryInfo) {
  const { stats, basename, path } = entry;
  const { atime, birthtime, ctime, size } = stats;
  return {
    basename,
    path,
    isDir: stats.isDirectory(),
    stats: {
      atime,
      birthtime,
      ctime,
      size,
    },
  };
}
