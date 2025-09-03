import React from 'react';
import PlantCard from '../PlantCard';
import './ProductsPage.css';

const ProductsPage = () => {
  const plantsArray = [
    {
      category: "Aromatic Plants",
      description: "Beautiful fragrant plants that fill your space with calming, natural scents",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Calming scent, used in aromatherapy and relaxation.",
          cost: "$20"
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Sweet fragrance, promotes relaxation and better sleep.",
          cost: "$18"
        },
        {
          name: "Rosemary",
          image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
          description: "Invigorating scent, often used in cooking and wellness.",
          cost: "$15"
        },
        {
          name: "Mint",
          image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
          description: "Refreshing aroma, perfect for teas and culinary use.",
          cost: "$12"
        },
        {
          name: "Lemon Balm",
          image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
          description: "Citrusy scent, relieves stress and promotes tranquility.",
          cost: "$14"
        },
        {
          name: "Hyacinth",
          image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
          description: "Intensely fragrant spring flower with beautiful blooms.",
          cost: "$22"
        }
      ]
    },
    {
      category: "Medicinal Plants",
      description: "Healing plants with therapeutic properties for natural wellness",
      plants: [
        {
          name: "Aloe Vera",
          image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          description: "Soothing gel used for skin ailments and healing.",
          cost: "$14"
        },
        {
          name: "Echinacea",
          image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
          description: "Boosts immune system, helps fight colds naturally.",
          cost: "$16"
        },
        {
          name: "Peppermint",
          image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
          description: "Relieves digestive issues and headaches effectively.",
          cost: "$13"
        },
        {
          name: "Chamomile",
          image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
          description: "Soothes anxiety and promotes restful sleep.",
          cost: "$15"
        },
        {
          name: "Calendula",
          image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
          description: "Heals wounds and soothes skin irritations naturally.",
          cost: "$12"
        },
        {
          name: "Ginger",
          image: "https://cdn.pixabay.com/photo/2018/04/05/14/09/ginger-3293034_1280.jpg",
          description: "Anti-inflammatory properties, aids digestion.",
          cost: "$11"
        }
      ]
    },
    {
      category: "Air Purifying Plants",
      description: "Natural air cleaners that remove toxins and improve indoor air quality",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        },
        {
          name: "Peace Lily",
          image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          description: "Removes mold spores and purifies the air.",
          cost: "$18"
        },
        {
          name: "Boston Fern",
          image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
          description: "Adds humidity to the air and removes toxins.",
          cost: "$20"
        },
        {
          name: "Rubber Plant",
          image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
          description: "Easy to care for and effective at removing toxins.",
          cost: "$17"
        },
        {
          name: "Bamboo Palm",
          image: "https://cdn.pixabay.com/photo/2017/08/02/01/01/living-2562125_1280.jpg",
          description: "Excellent for removing benzene and trichloroethylene.",
          cost: "$25"
        }
      ]
    }
  ];

  return (
    <div className="products-page">
      <div className="page-header">
        <h1>Our Plant Collection</h1>
        <p>Carefully curated plants for every space and need</p>
      </div>
      
      {plantsArray.map((section, index) => (
        <div key={index} className="plant-section">
          <div className="section-header">
            <h2 className="section-title">{section.category}</h2>
            <p className="section-description">{section.description}</p>
          </div>
          <div className="plants-grid">
            {section.plants.map((plant, plantIndex) => (
              <PlantCard key={plantIndex} plant={plant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
