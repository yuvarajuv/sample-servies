import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

// Style
import './style.css'

// Custom Hooks.
import { useI18n } from '@/i18n'


// Services
import useGetBuyers from '@/hooks/services/buyer/useGetBuyers'
import useGetBuyerById from '@/hooks/services/buyer/useGetBuyerById'
import usePostBuyer from '@/hooks/services/buyer/usePostBuyer'
import usePutBuyer from '@/hooks/services/buyer/usePutBuyer'
import useDeleteBuyer from '@/hooks/services/buyer/useDeleteBuyer'

const Buyer = (props) => {
  const navigate = useNavigate()
  const { formatMessage } = useI18n()

  const { response: getBuyersResponse, error: getBuyersError, loading: getBuyersLoading } = useGetBuyers();

  const { response: GetBuyerByIdResponse, error: GetBuyerByIdError, loading: GetBuyerByIdLoading } = useGetBuyerById(2);

  const buyerPayload = {
    requestId: "$datatype.uuid",
    items: "$mockData",
    count: "$count",
    anyKey: "anyValue"
  };

  const { loading: postBuyerLoading, error: postBuyerError, response: postBuyerResponse, sendPostData: sendBuyerPostData } = usePostBuyer(
    'sendPostData'
  )

  const { loading: putBuyerLoading, error: putBuyerError, response: putBuyerResponse, sendPutData: sendBuyerPutData } = usePutBuyer(
    'sendPutData'
  )

  const buyerDeletePayload = {
    requestId: "$datatype.uuid",
    items: "$mockData",
    count: "$count",
    anyKey: "anyValue"
  };

  const { loading: deleteBuyerLoading, error: deleteBuyerError, response: deleteBuyerResponse, sendDeleteData: sendBuyerDeleteData } = useDeleteBuyer(
    'sendDeleteData'
  )

  return (
    <>
      <section>
        <h2>Get Buyers</h2>
        <div>https://622a2573be12fc4538b38cdd.mockapi.io/api/v1/buyers </div>
        <div>Method: Get</div>
        <div>Response:</div>
        <pre>
         {getBuyersLoading && 'Get Buyers Loading...'}
         {getBuyersError && `Get Buyers Error: ${getBuyersError.message}`}
         {getBuyersResponse && JSON.stringify(getBuyersResponse)}
        </pre>
      </section>
      <section>
        <h2>Get Buyer By Id</h2>
        <div>https://622a2573be12fc4538b38cdd.mockapi.io/api/v1/buyers/2</div>
        <div>Method: Get</div>
        <div>Response:</div>
        <pre>
         {GetBuyerByIdLoading && 'Get Buyer Loading...'}
         {GetBuyerByIdError && `Get Buyer Error: ${GetBuyerByIdError.message}`}
         {GetBuyerByIdResponse && JSON.stringify(GetBuyerByIdResponse)}
        </pre>
      </section>
      <section>
        <h2>Create Buyer</h2>
        <div>https://622a2573be12fc4538b38cdd.mockapi.io/api/v1/buyers</div>
        <div>Method: Post</div>
        <div>Payload: </div>
        <pre>{JSON.stringify(buyerPayload)}</pre>
        <div><button type="button" onClick={()=>{sendBuyerPostData(buyerPayload)}}>Create Buyer</button></div>
        <div>Response:</div>
        <pre>
         {postBuyerLoading && 'Create Buyer Loading...'}
         {postBuyerError && `Create Buyer Error: ${postBuyerError.message}`}
         {postBuyerResponse && JSON.stringify(postBuyerResponse)}
        </pre>
      </section>
      <section>
        <h2>Update Buyer</h2>
        <div>https://622a2573be12fc4538b38cdd.mockapi.io/api/v1/buyers/2</div>
        <div>Method: Put</div>
        <div>Payload: </div>
        <pre>{JSON.stringify(buyerPayload)}</pre>
        <div><button type="button" onClick={()=>{sendBuyerPutData(buyerPayload)}}>Update Buyer</button></div>
        <div>Response:</div>
        <pre>
         {putBuyerLoading && 'Update Buyer Loading...'}
         {putBuyerError && `Update Buyer Error: ${putBuyerError.message}`}
         {putBuyerResponse && JSON.stringify(putBuyerResponse)}
        </pre>
      </section>
      <section>
        <h2>Delete Buyer</h2>
        <div>https://622a2573be12fc4538b38cdd.mockapi.io/api/v1/buyers/56</div>
        <div>Method: Delete</div>
        <div>Payload: </div>
        <pre>{JSON.stringify(buyerDeletePayload)}</pre>
        <div><button type="button" onClick={()=>{sendBuyerDeleteData(buyerDeletePayload)}}>Delete Buyer</button></div>
        <div>Response:</div>
        <pre>
         {deleteBuyerLoading && 'Delete Buyer Loading...'}
         {deleteBuyerError && `Delete Buyer Error: ${deleteBuyerError.message}`}
         {deleteBuyerResponse && JSON.stringify(deleteBuyerResponse)}
        </pre>
      </section>
    </>
  )
}

Buyer.propTypes = {
  title: PropTypes.string,
}

export default Buyer
