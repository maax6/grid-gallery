import './_gridPics.scss';

interface Photo {
  id: number;
  src: string;
  alt: string;
}

export function GridPics() {
  // variable avec les elements de asset
  const Photos: Photo[] = [
    {
      id: 1,
      src: '/img/photo1.png',
      alt: 'image 1',
    },
    {
      id: 2,
      src: '/img/photo2.png',
      alt: 'image 2',
    },
    {
      id: 3,
      src: '/img/photo3.png',
      alt: 'image 3',
    },
    {
      id: 4,
      src: '/img/photo4.png',
      alt: 'image 4',
    },
    {
      id: 5,
      src: '/img/photo5.png',
      alt: 'image 5',
    },
    {
      id: 6,
      src: '/img/photo6.png',
      alt: 'image 6',
    },
  ];
  return (
    <div className="gridPics">
      <div className="ctn container">
        {Photos.map((image: Photo, index: number) => (
          <div
            className={`ctn__photo-${image.id} element`}
            key={index}
            style={{ backgroundImage: `url(${image.src})` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
