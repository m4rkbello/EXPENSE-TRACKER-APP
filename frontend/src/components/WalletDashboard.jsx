/* eslint-disable no-unused-vars */
import React from 'react'

function WalletDashboard() {
  return (
    <div>

      <div className="flex">
        <div className="flex-none">
          <div className="card w-full glass">
            <div className="card-body">
              <div className="overflow-x-auto">

                <div className='text-center text-3xl text-black'>WALLET LIST</div>

                <table className="table">
                  {/* head */}
                  <thead className='bg-black'>
                    <tr>
                      <th>NAME</th>
                      <th></th>
                      <th>Job</th>
                      <th>Favorite Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                      <td>Purple</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>3</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
        <div className="flex-initial">

        </div>
        <div className="flex-initial w-32 ...">
          03
        </div>
      </div>




    </div>
  )
}

export default WalletDashboard