import product_data from '@/data/product-data';

// Get max price
export function maxPrice(): number {
  const max_price = [...product_data].reduce((max, product) => {
    return product.price > max ? product.price : max;
  }, 0);
  return max_price;
}

export function imageCompare() {
  document.addEventListener('DOMContentLoaded', () => {
    const beforeAfterElements = document.querySelectorAll<HTMLElement>('.beforeAfter');

    if (beforeAfterElements.length > 0) {
      beforeAfterElements.forEach((element) => {
        beforeAfter(element, {
          movable: true,
          clickMove: true,
          position: 50,
          separatorColor: '#fafafa',
          bulletColor: '#fafafa',
          onMoveStart: (e: Event) => {
            console.log('Move started', e);
          },
          onMoving: () => {
            console.log('Moving');
          },
          onMoveEnd: () => {
            console.log('Move ended');
          },
        });
      });
    }
  });

  interface BeforeAfterOptions {
    movable: boolean;
    clickMove: boolean;
    position: number;
    separatorColor: string;
    bulletColor: string;
    onMoveStart: (e: Event) => void;
    onMoving: () => void;
    onMoveEnd: () => void;
  }

  function beforeAfter(element: HTMLElement, options: BeforeAfterOptions): void {
    console.log('Initializing beforeAfter for element:', element);
    console.log('Options:', options);
    // Placeholder: Here you would implement your actual before/after slider logic.
  }
}
