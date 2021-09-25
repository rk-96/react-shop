import axios from "axios";
import Layout from "../../components/layout";

export default function ProductPage({data}) {
    return (
        <Layout>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={data.image} className="img-fluid rounded-start" alt={data.title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">{data.description}</p>
                            <p className="card-text">${data.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(  context) {
    const res = await axios.get(`https://fakestoreapi.com/products/` + context.params.id);
    const data = res.data;
    return {
        props: {
            data
        }
    }
}