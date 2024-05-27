import { DataSource } from '../components/GalleryFy/types';
declare function formatDataSource(data: DataSource[]): {
    type: string;
    src: string;
    title?: string | undefined;
}[];
export { formatDataSource };
