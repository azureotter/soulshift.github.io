var gdjs;(function(t){class r{constructor(e){this._obstacleRBush=new rbush}static getManager(e){return e._lightObstaclesManager||(e._lightObstaclesManager=new t.LightObstaclesManager(e)),e._lightObstaclesManager}addObstacle(e){e.currentRBushAABB?e.currentRBushAABB.updateAABBFromOwner():e.currentRBushAABB=new t.BehaviorRBushAABB(e),this._obstacleRBush.insert(e.currentRBushAABB)}removeObstacle(e){this._obstacleRBush.remove(e.currentRBushAABB)}getAllObstaclesAround(e,s,i){const n=e.getX(),h=e.getY(),a=t.staticObject(r.prototype.getAllObstaclesAround);a.minX=n-s,a.minY=h-s,a.maxX=n+s,a.maxY=h+s;const g=this._obstacleRBush.search(a);i.length=0,g.forEach(o=>i.push(o.behavior))}}t.LightObstaclesManager=r;class l extends t.RuntimeBehavior{constructor(e,s,i){super(e,s,i);this._oldX=0;this._oldY=0;this._oldWidth=0;this._oldHeight=0;this.currentRBushAABB=null;this._registeredInManager=!1;this._manager=r.getManager(e)}doStepPreEvents(e){!this.activated()&&this._registeredInManager?(this._manager.removeObstacle(this),this._registeredInManager=!1):this.activated()&&!this._registeredInManager&&(this._manager.addObstacle(this),this._registeredInManager=!0),(this._oldX!==this.owner.getX()||this._oldY!==this.owner.getY()||this._oldWidth!==this.owner.getWidth()||this._oldHeight!==this.owner.getHeight())&&(this._registeredInManager&&(this._manager.removeObstacle(this),this._manager.addObstacle(this)),this._oldX=this.owner.getX(),this._oldY=this.owner.getY(),this._oldWidth=this.owner.getWidth(),this._oldHeight=this.owner.getHeight())}onDestroy(){this._manager&&this._registeredInManager&&this._manager.removeObstacle(this)}onActivate(){this._registeredInManager||(this._manager.addObstacle(this),this._registeredInManager=!0)}onDeActivate(){!this._registeredInManager||(this._manager.removeObstacle(this),this._registeredInManager=!1)}}t.LightObstacleRuntimeBehavior=l,t.registerBehavior("Lighting::LightObstacleBehavior",t.LightObstacleRuntimeBehavior)})(gdjs||(gdjs={}));
//# sourceMappingURL=lightobstacleruntimebehavior.js.map