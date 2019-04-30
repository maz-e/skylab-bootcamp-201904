import React from 'react'

import {Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap'

function DailyOfert(props) {


  const detail = {
    "_id": "5cc7662e9437a23d6c998d03",
    "_links": {
        "image_small": {
            "href": "https://www.adidas.com/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/default/dw1c569268/zoom/EF7387_00_plp_standard.jpg"
        },
        "images_small": [
            {
                "href": "https://www.adidas.com/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/default/dw1c569268/zoom/EF7387_00_plp_standard.jpg"
            }
        ],
        "image_large": {
            "href": "https://www.adidas.com/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/default/dw1c569268/zoom/EF7387_00_plp_standard.jpg"
        },
        "images_large": [
            {
                "href": "https://www.adidas.com/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/default/dw1c569268/zoom/EF7387_00_plp_standard.jpg"
            }
        ]
    },
    "product_Id": "EF7387",
    "product_id": "EF7387",
    "model_number": "GKN62",
    "display_product_id": "EF7387",
    "product_name": "BBC Hu NMD Shoes",
    "subtitle": " Originals ",
    "original_price": 250,
    "display_currency": "USD",
    "is_new": true,
    "is_sale": false,
    "is_sold_out": false,
    "is_exclusive": false,
    "is_app_exclusive": false,
    "is_early_access": false,
    "orderable": false,
    "badge_text": "COMING SOON",
    "badge_color": "#A7C1B9",
    "badge_type": "preview",
    "purchase_limit": 10,
    "is_preorderable": false,
    "coming_soon_date": "2019-05-03T14:00:00.000Z",
    "push_tag": "EF7387-PLC-en-US"
}


  return (
    <div>
      <Card>
        <CardImg top width="100%" src={detail._links.image_small.href} alt="Card image cap" />
        <CardBody>
          <CardTitle>{detail.product_name}</CardTitle>
          <CardSubtitle>{detail.subtitle}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Ir a producton</Button>
        </CardBody>
      </Card>
    </div>

  )
}

export default DailyOfert