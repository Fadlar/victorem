<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Victorem-{{ $invoice->order_id }}</title>

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet" />
    <link href="{{ asset('victorem/print.css') }}" rel="stylesheet" />
</head>

<body class="ltr">
    <div class="container">
        <div class="invoice-wrapper clearfix">
            <div class="row">
                <div class="invoice-header clearfix">
                    <div class="col-md-3">
                        <div class="store-name">
                            <h1>VICTOREM</h1>
                        </div>
                    </div>

                    <div class="col-md-9 clearfix">
                        <div class="invoice-header-right pull-right">
                            <span class="title">INVOICE</span>

                            <div class="invoice-info clearfix">
                                <div class="invoice-id">
                                    <label for="invoice-id">Invoice ID:</label>
                                    <span>#{{ $invoice->order_id }}</span>
                                </div>

                                <div class="invoice-date">
                                    <label for="invoice-date">Date:</label>
                                    <span>{{ $invoice->updated_at->format('Y / m / d') }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="invoice-body clearfix">
                <div class="invoice-details-wrapper">
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="invoice-details">
                                <h5>Order Details</h5>

                                <div class="table-responsive">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td>Email:</td>
                                                <td>{{ $invoice->user->email }}</td>
                                            </tr>

                                            <tr>
                                                <td>Phone:</td>
                                                <td>{{ $invoice->phone_number }}</td>
                                            </tr>
                                            @php
                                                $costData = json_decode($invoice->cost_data, true);
                                            @endphp
                                            <tr>
                                                <td>Shipping Method:</td>
                                                <td>JNE @if ($costData)
                                                        {{ $costData['service'] }}
                                                    @endif
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Payment Method:</td>
                                                <td>Midtrans</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="invoice-address">
                                <h5>Shipping From</h5>

                                <span>Victorem</span>
                                <span>+62 812-2223-4113</span>
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-6">
                            <div class="invoice-address">
                                <h5>Shipping To</h5>
                                {{ $invoice->address }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="cart-list">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($invoice->orderItems as $item)
                                        <tr>
                                            <td>
                                                <span>{{ $item->product->name }}</span>

                                                <div class="option">
                                                    <span>
                                                        Size:

                                                        <span style="text-transform: uppercase"> {{ $item->size }} </span>
                                                    </span>
                                                </div>
                                            </td>

                                            <td>
                                                <label class="visible-xs">Price:</label>
                                                <span>Rp{{ number_format($item->price, 0, ',', '.') }}</span>
                                            </td>

                                            <td>
                                                <label class="visible-xs">Quantity:</label>
                                                <span>{{ $item->quantity }}</span>
                                            </td>
                                            <td>
                                                <label class="visible-xs">Total:</label>
                                                <span>Rp{{ number_format($item->amount, 0, ',', '.') }}</span>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="total pull-right">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>Rp{{ number_format($invoice->original_price, 0, ',', '.') }}</td>
                                </tr>

                                <tr>
                                    <td>Discount</td>
                                    <td>Rp{{ number_format($invoice->discount, 0, ',', '.') }}</td>
                                </tr>

                                <tr>
                                    <td>Shipping</td>
                                    <td>Rp{{ number_format($invoice->cost, 0, ',', '.') }}</td>
                                </tr>

                                <tr>
                                    <td>Total</td>
                                    <td>Rp{{ number_format($invoice->amount, 0, ',', '.') }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        window.print();
    </script>
</body>

</html>
