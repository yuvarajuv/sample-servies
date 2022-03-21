import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

// Style
import './style.css'

// Custom Hooks.
import { useI18n } from '@/i18n'


// Services
import useGetSellers from '@/hooks/services/seller/useGetSellers'
import useGetSellerById from '@/hooks/services/seller/useGetSellerById'
import usePostSeller from '@/hooks/services/seller/usePostSeller'
import usePutSeller from '@/hooks/services/seller/usePutSeller'
import useDeleteSeller from '@/hooks/services/seller/useDeleteSeller'

const Seller = (props) => {
  const navigate = useNavigate()
  const { formatMessage } = useI18n()

  const { response: getSellersResponse, error: getSellersError, loading: getSellersLoading } = useGetSellers();

  const { response: GetSellerByIdResponse, error: GetSellerByIdError, loading: GetSellerByIdLoading } = useGetSellerById(1);

  const sellerPayload = {
    requestId: "$datatype.uuid",
    items: "$mockData",
    count: "$count",
    anyKey: "anyValue"
  };

  const { loading: postSellerLoading, error: postSellerError, response: postSellerResponse, sendPostData: sendSellerPostData } = usePostSeller(
    'sendPostData'
  )

  const { loading: putSellerLoading, error: putSellerError, response: putSellerResponse, sendPutData: sendSellerPutData } = usePutSeller(
    'sendPutData'
  )

  const sellerDeletePayload = {
    requestId: "$datatype.uuid",
    items: "$mockData",
    count: "$count",
    anyKey: "anyValue"
  };

  const { loading: deleteSellerLoading, error: deleteSellerError, response: deleteSellerResponse, sendDeleteData: sendSellerDeleteData } = useDeleteSeller(
    'sendDeleteData'
  )

  return (
    <>
      <section>
        <h2>Get Sellers</h2>
        <div>https://622a2573be12fc4538b38cdd.mockapi.io/api/v1/sellers </div>
        <div>Method: Get</div>
        <div>Response:</div>
        <pre>
         {getSellersLoading && 'Get Sellers Loading...'}
         {getSellersError && `Get Sellers Error: ${getSellersError.message}`}
         {getSellersResponse && JSON.stringify(getSellersResponse)}
        </pre>
      </section>
      <section>
        <h2>Get Seller By Id</h2>
        <div>https://622a2573be12fc4538b38cdd.mockapi.io/api/v1/sellers/1 </div>
        <div>Method: Get</div>
        <div>Response:</div>
        <pre>
         {GetSellerByIdLoading && 'Get Seller Loading...'}
         {GetSellerByIdError && `Get Seller Error: ${GetSellerByIdError.message}`}
         {GetSellerByIdResponse && JSON.stringify(GetSellerByIdResponse)}
        </pre>
      </section>
      <section>
        <h2>Create Seller</h2>
        <div>https://622a2573be12fc4538b38cdd.mockapi.io/api/v1/sellers</div>
        <div>Method: Post</div>
        <div>Payload: </div>
        <pre>{JSON.stringify(sellerPayload)}</pre>
        <div><button type="button" onClick={()=>{sendSellerPostData(sellerPayload)}}>Create Seller</button></div>
        <div>Response:</div>
        <pre>
         {postSellerLoading && 'Create Seller Loading...'}
         {postSellerError && `Create Seller Error: ${postSellerError.message}`}
         {postSellerResponse && JSON.stringify(postSellerResponse)}
        </pre>
      </section>
      <section>
        <h2>Update Seller</h2>
        <div>https://622a2573be12fc4538b38cdd.mockapi.io/api/v1/sellers/2</div>
        <div>Method: Put</div>
        <div>Payload: </div>
        <pre>{JSON.stringify(sellerPayload)}</pre>
        <div><button type="button" onClick={()=>{sendSellerPutData(sellerPayload)}}>Update Seller</button></div>
        <div>Response:</div>
        <pre>
         {putSellerLoading && 'Update Seller Loading...'}
         {putSellerError && `Update Seller Error: ${putSellerError.message}`}
         {putSellerResponse && JSON.stringify(putSellerResponse)}
        </pre>
      </section>
      <section>
        <h2>Delete Seller</h2>
        <div>https://622a2573be12fc4538b38cdd.mockapi.io/api/v1/sellers/56</div>
        <div>Method: Delete</div>
        <div>Payload: </div>
        <pre>{JSON.stringify(sellerDeletePayload)}</pre>
        <div><button type="button" onClick={()=>{sendSellerDeleteData(sellerDeletePayload)}}>Delete Seller</button></div>
        <div>Response:</div>
        <pre>
         {deleteSellerLoading && 'Delete Seller Loading...'}
         {deleteSellerError && `Delete Seller Error: ${deleteSellerError.message}`}
         {deleteSellerResponse && JSON.stringify(deleteSellerResponse)}
        </pre>
      </section>
    </>
  )
}

Seller.propTypes = {
  title: PropTypes.string,
}

export default Seller
