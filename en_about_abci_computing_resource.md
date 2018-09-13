---
layout: en/about_abci/computing_resource
title: COMPUTING RESOURCES - About ABCI | ABCI
permalink: /en/about_abci/computing_resource.html
---


## COMPUTING RESOURCES
{: .h2 }


<div class="lead_text">ABCI consists of; 1,088 computing nodes, 10 multi-platform nodes, 22PB large-capacity storage system, high-speed InfiniBand network connecting nodes and storage systems, administrative servers, and network systems.</div>

<h4 class="h4">&#9633; ABCI System Outline</h4>
![en_img1.png](../../img/about_abci/computing/en_img1.png)
<br />
<br />

<h4 class="h4">&#9633; Block Diagram of the Computing Node</h4>
<br />
<table class="table">
<tr>
<th colspan="2">FUJITSU PRIMERGY Server( 2 servers in 2U)</th>
</tr>
<tr>
<td>CPU</td>
<td>Intel Xeon Gold 6148(27.5M Cache, 2.40 GHz, 20 Core)&times;2</td>
</tr>
<tr>
<td>GPU</td>
<td>NVIDIA Tesla V100(SXM2)&times;4</td>
</tr>
<tr>
<td>Memory</td>
<td>384GiB</td>
</tr>
<tr>
<td>Local Storage</td>
<td>1.6TB NVMe SSD(Intel SSD DC P4600 u.2)&times;1</td>
</tr>
<tr>
<td>Interconnect</td>
<td>InfiniBand EDR&times;2</td>
</tr>
</table>
<br />
![img2.png](../../img/about_abci/computing/img2.png)


### Features
{: .h3 }

<h4 class="h4">&#9633; Computing Node</h4>
<p class="c">
Each computing node accommodates: two Intel Xeon Gold 6148, four Nvidia Tesla V100 connected by SXM2, 1.6TB SSD connected with NVMe, and 384GiB main memory.<br />

The theoretical performance of the computing node is 506 AI-TFLOPS for half precision (required for AI machine learning) and 34.2 TFLOPS for double precision (required for Engineering science and technology calculations).
</p>

<h4 class="h4">&#9633; High-Speed Interconnect</h4>
<p class="c">InfiniBand EDR is used for interconnecting among the computing nodes, the multi-platform nodes, the interactive nodes, and the large-capacity storage systems. 34 computing nodes are mounted on a rack.  There are 32 racks for a total of 1,088 nodes. The interconnection within a rack is full bisection, while the interconnection between the 32 racks are over subscripted (1/3 bandwidth).</p>

<h4 class="h4">&#9633; Large-Capacity Storage</h4>
<p class="c">22PB Large-capacity storage system for handling AI and Big Data consists of three sets of DDN SFA14KX. GPFS is supported by DDN GRIDScaler.</p>

<h4 class="h4">&#9633; Interconnection Network</h4>
<p class="c">Since ABCI is connected to SINET-5(100Gbps), ABCI users may access ABCI through the internet. The connection is secured by firewalls (FortiGate 1500D) and two-stage authentication is adopted.</p>


