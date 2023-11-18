import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../pages/NovedadItem';
import "../../styles/components/pages/ProductosPage.css";

const SkateboardsPage = () => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovededes] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovededes(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);
    
    return ( 
        
        <div className="body-productos">
        <div className="container">
            <div className="productos row">
                {loading ? (
                    <p>Cargando Productos...</p>
                ) : (
                    novedades.map(item => 
                        <NovedadItem
                            key={item.id}                            
                            description={item.Descripcion}
                            imagen={item.imagen}
                            price={item.Precio} />)
                )}
            </div>
        </div>
    </div>



        
        



            // <div class="body-productos">
            //     <div className="container">
            //         <div className="productos row">

            //             <div className="col-12 col-md-6 col-lg-2">
            //                 <div className="card-productos">
            //                     <img src="./recursos/imagenes/skateboards/skateboards-1.webp" className="card-img-top p-3"
            //                         alt="imagen producto"/>
            //                     <div className="card-body">
            //                         <p className="card-text"><span className="price">$ 27.587</span> <small> 6% OFF</small></p>
            //                         <p className="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            //                                 fill="currentColor" className="bi bi-lightning-fill" viewBox="0 0 16 16">
            //                                 <path
            //                                     d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" />
            //                             </svg> FULL</p>
            //                         <p className="card-text">Skate completo Pro Hard Maple</p>
            //                     </div>
            //                 </div>
            //             </div>
                   
            //         </div>
            //     </div>
            // </div>   
     );
}
 
export default SkateboardsPage;