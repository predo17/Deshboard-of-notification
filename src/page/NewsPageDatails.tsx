import DetailsNews from '@/components/DetailsNews';
import { useParams } from 'react-router-dom';

export default function NewsPageDatails() {
    const {title} = useParams();
  return (
    <div className="flex justify-center items-center h-full py-20">
      <DetailsNews title={title} />
    </div>
  )
}
