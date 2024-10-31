    
    
    const images = [
        '/img/galeri/00ecfa99-7a86-4ff9-a639-6cd60c569517.jpg',
        '/img/galeri/0514e43a-926d-4435-a7e3-e8b86f8370db.jpg',
        '/img/galeri/053924eb-a9a1-4f57-8ab9-86e438f94571.jpg',
        '/img/galeri/088c8dc7-8ff2-46a3-af19-860832fa9dfc.jpg',
        '/img/galeri/0bba4bc9-4e8a-451a-beb1-4691e3dd6a38.jpg',
        '/img/galeri/1561b146-bf61-4737-a0dd-241b97faf7e8.jpg',
        '/img/galeri/16d822b6-5dc4-461c-a7ad-82a0b17576c2.jpg',
        '/img/galeri/1f0c0005-30e1-4ff6-be3b-7fa814814ade.jpg',
        '/img/galeri/289f7cc1-e662-4724-b474-8cfb7aac27d3.jpg',
        '/img/galeri/29594331-e02a-42e5-ac85-71c8281a25b3.jpg',
        '/img/galeri/2dc9c5d6-cf92-4a3e-8915-b476d96979f8.jpg',
        '/img/galeri/2f711a41-4e20-4192-8871-54627a42802e.jpg',
        '/img/galeri/3c692545-69b9-4250-810e-e3dfcbbb637c.jpg',
        '/img/galeri/43430779-8c85-47b2-8f4f-e7561950449f.jpg',
        '/img/galeri/479b79b7-af30-4265-a6fb-02932715cea9.jpg',
        '/img/galeri/511d83e2-9f4f-4776-a549-451bd6c18255.jpg',
        '/img/galeri/56f1611f-60a8-462f-9dad-aeff9cdc4a6b.jpg',
        '/img/galeri/5f45eaf1-0f6e-4232-94f8-9c465062af4c.jpg',
        '/img/galeri/6f6e4147-b1a5-465a-9da8-4c86cc94ff71.jpg',
        '/img/galeri/6fa24796-1d4e-40bb-b8b7-b07c7eaea28b.jpg',
        '/img/galeri/7247f47f-e678-4929-83f8-d3e58f03a3aa.jpg',
        '/img/galeri/733c5382-aa67-4788-8037-193036a02347.jpg',
        '/img/galeri/76921262-6c5a-458a-8c17-99b09e5179dd.jpg',
        '/img/galeri/7c377f26-62f3-4965-b0e6-a2d7bf033c79.jpg',
        '/img/galeri/7c5fbfb6-b530-4567-952b-78a4af4ad916.jpg',
        '/img/galeri/7dca8ede-a642-422f-baa6-38741229a522.jpg',
        '/img/galeri/8ae7dbf8-868c-45a2-a764-40b323f63517.jpg',
        '/img/galeri/8d220aa7-3e41-4f5b-9ff3-a00a8e8db5e1.jpg',
        '/img/galeri/9918bc78-013b-4b20-a989-cf78f776f2f8.jpg',
        '/img/galeri/9b04d9ce-aa03-4191-98d5-1364a01e8be7.jpg',
        '/img/galeri/9d0c930a-e12a-43f2-93ad-acc5983c7c13.jpg',
        '/img/galeri/a0b9cb49-590e-4b05-9aa0-b0c568ffdeef.jpg',
        '/img/galeri/a198e654-9061-456c-9f99-b662691e6b07.jpg',
        '/img/galeri/a310ae89-6c5b-4b48-a939-09193defaf62.jpg',
        '/img/galeri/aff012d2-a8e6-4272-b93d-9be6ae572eab.jpg',
        '/img/galeri/b16ade92-a432-4c89-9223-c55440e26f13.jpg',
        '/img/galeri/bcade6fa-2afd-4935-9af9-b8ad1c86c7d7.jpg',
        '/img/galeri/bce5f592-c60b-4a3e-906a-aceedfa474de.jpg',
        '/img/galeri/d28ad0e3-b7b7-4524-86cb-57cdd8f94465.jpg',
        '/img/galeri/deae5a3a-ed28-4488-b6c2-d2256a80f4d1.jpg',
        '/img/galeri/eaf5606e-a9ae-47c2-b89a-edc2c8067f62.jpg',
        '/img/galeri/eb1d3743-900c-4c67-8c42-2e5cf3724cc0.jpg',
        '/img/galeri/edb3f166-a734-4b6f-a343-9787df6b48cf.jpg',
        '/img/galeri/f44b7276-fe9e-4025-89e8-b485a3a16ef9.jpg',
        '/img/galeri/f5df3ffe-9775-4786-9ecb-9ce4539b009c.jpg'
    ];

    const gallery = document.getElementById('gallery');

    images.forEach(src => {
        const div = document.createElement('div');
        div.className = 'coleg';
        const img = document.createElement('img');
        img.src = src;
        div.appendChild(img);
        gallery.appendChild(div);
    });

